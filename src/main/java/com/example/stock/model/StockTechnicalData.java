package com.example.stock.model;

public class StockTechnicalData {
    private int days;
    private String bsePrice;
    private String nsePrice;

    // Getters and setters
    public int getDays() { return days; }
    public void setDays(int days) { this.days = days; }

    public String getBsePrice() { return bsePrice; }
    public void setBsePrice(String bsePrice) { this.bsePrice = bsePrice; }

    public String getNsePrice() { return nsePrice; }
    public void setNsePrice(String nsePrice) { this.nsePrice = nsePrice; }

    @Override
    public String toString() {
        return "Days: " + days + ", BSE Price: " + bsePrice + ", NSE Price: " + nsePrice;
    }
}
