import winston, { format } from "winston";

const { combine, timestamp, label, printf } = format;
const CATEGORY = "Custom format";

const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });
  
const winstonLogger = winston.createLogger({
    level: 'debug',
    format: combine(label({ label: CATEGORY }), timestamp(), customFormat),
    transports: [
      new winston.transports.Console(),
    ]
  });

export const logger = winstonLogger; 
