# Computer Science Capstone Project Artefact
**Title**: A Comparative Analysis of News Sentiment's Impact on Market Volatility and Its Implications for Trading Strategy

**Author**: Jahdo A. Vanterpool  
**Programme**: MSc Data Science & Artificial Intelligence  
**University**: University of Liverpool  
**Supervisor**: Dr. Andrea Corrandini  
**Date**: August 2025

---

## Project Overview

This dissertation investigates the relationship between financial news sentiment and the daily price volatility of two types of exchange-traded funds (ETFs): the Invesco Solar ETF (TAN), representing a niche renewable energy sector, and the SPDR S&P 500 ETF (SPY), representing the broader market.

The artefact demonstrates how Natural Language Processing (NLP), econometric modeling, and quantitative backtesting can be combined into a modular Python-based system to assess sentiment-volatility interactions and test a simple trading strategy.

---

## Dissertation Objectives

- Extract and quantify financial sentiment from news headlines using the VADER model.
- Model and compare ETF volatility using GARCH and rolling standard deviation.
- Evaluate the correlation and predictive relationship between sentiment and volatility.
- Design and backtest a rules-based trading strategy informed by sentiment signals.

---

## IT Artefact Overview

This project implements a modular Python-based artefact designed to:

- Collect and store historical ETF price data and financial news  
- Apply sentiment analysis to daily headlines using VADER  
- Model price volatility using rolling standard deviation and GARCH  
- Evaluate sentiment-volatility relationships using regression analysis  
- Backtest a rules-based trading strategy  
- Log all activities to ensure transparency and reproducibility  

---

### 🗂️ Source Modules

| Module                 | Purpose                                                                 |
|------------------------|-------------------------------------------------------------------------|
| `logger.py`            | Reusable logger that writes structured logs to the `/logs/` folder      |
| `collect_data.py`      | Fetches ETF prices and financial news articles from public APIs         |
| `sentiment_analysis.py`| Applies sentiment scoring using VADER                                   |
| `volatility_model.py`  | Models volatility using rolling std and GARCH                           |
| `regression_analysis.py` | Analyzes sentiment-volatility relationships via regression             |
| `backtest.py`          | Simulates a trading strategy based on sentiment signals                 |

---

## Logging
This project uses a reusable logging utility (`logger.py`) that stores log output in the `logs/` folder.
Logs include timestamps, severity level, and message content to support debugging and traceability.
how would hyjh
All components are written in Python, follow PEP 8 guidelines, and are version-controlled using Git.

---

## Technologies

- `Python 3.11`
- `yfinance`, `requests`, `pandas`, `nltk`, `vaderSentiment`, `arch`, `statsmodels`, `matplotlib`, `seaborn`, `logging`, `pathlib`

---