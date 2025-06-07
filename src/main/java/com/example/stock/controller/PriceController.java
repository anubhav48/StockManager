
package com.example.stock.controller;

import com.example.stock.model.CalculationRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class PriceController {

    @PostMapping("/calculate")
    public double calculateTargetBuyPrice(@RequestBody CalculationRequest request) {
        double profit = request.getProfit();
        double currPrice = request.getCurrPrice();
        double taxPercent = request.getTaxPercent();
        double extraUnitsPercent = request.getExtraUnitsPercent();

        if (profit <= 0 || currPrice <= 0) {
            throw new IllegalArgumentException("Profit and current price must be positive.");
        }

        double unitsSold = profit / currPrice;
        double netProfit = profit * (1 - taxPercent / 100);
        double totalUnitsToBuy = unitsSold * (1 + extraUnitsPercent / 100);
        return netProfit / totalUnitsToBuy;
    }
}
