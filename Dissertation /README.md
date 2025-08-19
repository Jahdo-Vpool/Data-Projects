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

## Artefact Structure

The artefact consists of the following core modules:

| Module | Description |
|--------|-------------|
| `collect_data.py` | Gathers historical ETF price data and financial news headlines. |
| `sentiment_analysis.py` | Scores news sentiment using VADER and aggregates daily values. |
| `volatility_model.py` | Estimates volatility using rolling standard deviation and GARCH. |
| `regression_analysis.py` | Tests statistical relationships between sentiment and volatility. |
| `backtest.py` | Simulates a simple sentiment-driven trading strategy. |

All components are written in Python, follow PEP 8 guidelines, and are version-controlled using Git.

---

## Technologies

- `Python 3.11`
- `yfinance`, `requests`, `pandas`, `nltk`, `vaderSentiment`, `arch`, `statsmodels`, `matplotlib`, `seaborn`, `logging`, `pathlib`

---