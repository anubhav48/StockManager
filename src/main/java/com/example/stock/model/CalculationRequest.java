
package com.example.stock.model;

public class CalculationRequest {
    private double profit;
    private double currPrice;
    private double taxPercent;
    private double extraUnitsPercent;

    public double getProfit() { return profit; }
    public void setProfit(double profit) { this.profit = profit; }

    public double getCurrPrice() { return currPrice; }
    public void setCurrPrice(double currPrice) { this.currPrice = currPrice; }

    public double getTaxPercent() { return taxPercent; }
    public void setTaxPercent(double taxPercent) { this.taxPercent = taxPercent; }

    public double getExtraUnitsPercent() { return extraUnitsPercent; }
    public void setExtraUnitsPercent(double extraUnitsPercent) { this.extraUnitsPercent = extraUnitsPercent; }
}
