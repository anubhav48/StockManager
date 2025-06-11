
package com.example.stock.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.stock.model.CalculationRequest;

@RestController
@CrossOrigin(origins = "*")
public class PriceController {
     Map<String, Double> result = new HashMap<>();

    @PostMapping("/calculate")
    public Map<String, Double>  calculateTargetBuyPrice(@RequestBody CalculationRequest request) {
        double profit = request.getProfit();
        double currPrice = request.getCurrPrice();
        double taxPercent = request.getTaxPercent();
        double extraUnitsPercent = request.getExtraUnitsPercent();

        System.out.println("Received request: " + request);

        if (profit <= 0 || currPrice <= 0) {
            throw new IllegalArgumentException("Profit and current price must be positive.");
        }

        double unitsSold = profit / currPrice;
        double netProfit = profit * (1 - taxPercent / 100);
        double totalUnitsToBuy = unitsSold * (1 + extraUnitsPercent / 100);
        double targetPrice = netProfit / totalUnitsToBuy;

       // return netProfit / totalUnitsToBuy;
   
    result.put("targetPrice", targetPrice);
    return result;
    }
}
