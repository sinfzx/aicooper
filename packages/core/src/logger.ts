interface LogContext {
  requestId?: string
  userId?: string
  sceneId?: string
  featureId?: string
  action?: string
  latency?: number
  [key: string]: any
}

interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error'
  message: string
  timestamp: string
  context?: LogContext
}

export class Logger {
  private static instance: Logger
  private context: LogContext = {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  setContext(context: LogContext): void {
    this.context = { ...this.context, ...context }
  }

  clearContext(): void {
    this.context = {}
  }

  private log(level: LogEntry['level'], message: string, additionalContext?: LogContext): void {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      context: { ...this.context, ...additionalContext }
    }

    // In development, use console for better readability
    if (process.env.NODE_ENV === 'development') {
      const contextStr = Object.keys(entry.context || {}).length > 0 
        ? ` [${JSON.stringify(entry.context)}]` 
        : ''
      
      switch (level) {
        case 'debug':
          console.debug(`🐛 ${message}${contextStr}`)
          break
        case 'info':
          console.info(`ℹ️  ${message}${contextStr}`)
          break
        case 'warn':
          console.warn(`⚠️  ${message}${contextStr}`)
          break
        case 'error':
          console.error(`❌ ${message}${contextStr}`)
          break
      }
    } else {
      // In production, use structured JSON logging
      console.log(JSON.stringify(entry))
    }
  }

  debug(message: string, context?: LogContext): void {
    this.log('debug', message, context)
  }

  info(message: string, context?: LogContext): void {
    this.log('info', message, context)
  }

  warn(message: string, context?: LogContext): void {
    this.log('warn', message, context)
  }

  error(message: string, context?: LogContext): void {
    this.log('error', message, context)
  }

  // Utility method for timing operations
  time<T>(operation: string, fn: () => Promise<T>, context?: LogContext): Promise<T> {
    const start = Date.now()
    this.debug(`Starting ${operation}`, context)
    
    return fn().then(
      (result) => {
        const latency = Date.now() - start
        this.info(`Completed ${operation}`, { ...context, latency })
        return result
      },
      (error) => {
        const latency = Date.now() - start
        this.error(`Failed ${operation}`, { ...context, latency, error: error.message })
        throw error
      }
    )
  }
}

// Export singleton instance
export const logger = Logger.getInstance()

// Export convenience functions
export const log = {
  debug: (message: string, context?: LogContext) => logger.debug(message, context),
  info: (message: string, context?: LogContext) => logger.info(message, context),
  warn: (message: string, context?: LogContext) => logger.warn(message, context),
  error: (message: string, context?: LogContext) => logger.error(message, context),
  time: <T>(operation: string, fn: () => Promise<T>, context?: LogContext) => 
    logger.time(operation, fn, context),
  setContext: (context: LogContext) => logger.setContext(context),
  clearContext: () => logger.clearContext(),
}