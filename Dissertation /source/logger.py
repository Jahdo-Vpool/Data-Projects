# Import necessary libraries
import logging                          # For recording messages: info, warnings, errors, etc.
from pathlib import Path                # For safely handling file paths and creating directories

# Function to initialize and return a configured logger
def get_logger(name: str, log_file: str):
    Path("logs").mkdir(exist_ok=True)  # Creates 'logs' directory if it doesn't already exist

    logging.basicConfig(
        filename=f"logs/{log_file}",   # Output file where logs will be stored
        level=logging.INFO,            # Logs messages at INFO level and above (INFO, WARNING, ERROR, CRITICAL)
        format="%(asctime)s - %(levelname)s - %(message)s",  # Log an entry format with timestamp and severity
        filemode="a"                   # Appends to an existing log file rather than overwriting it
    )

    return logging.getLogger(name)     # Returns a logger instance associated with the given name



