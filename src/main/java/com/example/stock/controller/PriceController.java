package com.example.stock.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.stock.model.CalculationRequest;
import com.example.stock.model.StockTechnicalData;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

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

  @GetMapping("/indianapi-stock")
    public Object getStockDataFromIndianApi(@RequestParam String name) {
        OkHttpClient client = new OkHttpClient();
        String url = "https://stock.indianapi.in/stock?name=" + name.replace(" ", "+");
        Request request = new Request.Builder()
                .url(url)
                .get()
                .addHeader("X-Api-Key", "sk-live-tl99xubY47uEyAc6x37pi45RN9LiBbencvgdaQO3")
                .build();
        try (Response response = client.newCall(request).execute()) {
            if (response.body() != null) {
                String jsonResponse = response.body().string();
                ObjectMapper mapper = new ObjectMapper();
                JsonNode root = mapper.readTree(jsonResponse);
                JsonNode stockTechnicalDataNode = root.get("stockTechnicalData");
                if (stockTechnicalDataNode == null) {
                    // Try to check if it's inside a 'data' field (as string)
                    JsonNode dataNode = root.get("data");
                    if (dataNode != null && dataNode.isTextual()) {
                        JsonNode inner = mapper.readTree(dataNode.asText());
                        stockTechnicalDataNode = inner.get("stockTechnicalData");
                    }
                }
                if (stockTechnicalDataNode == null || !stockTechnicalDataNode.isArray()) {
                    return Map.of("error", "No stockTechnicalData found in response", "raw", jsonResponse);
                }
                StockTechnicalData[] stockDataArray = mapper.treeToValue(stockTechnicalDataNode, StockTechnicalData[].class);
                return stockDataArray;
            } else {
                return Map.of("error", "No response body");
            }
        } catch (IOException e) {
            return Map.of("error", "Failed to fetch or parse data: " + e.getMessage());
        }
    }

  @GetMapping("/indianapi-trending")
    public Object getTrendingStocks() {
        OkHttpClient client = new OkHttpClient();
        String url = "https://stock.indianapi.in/trending";
        Request request = new Request.Builder()
                .url(url)
                .get()
                .addHeader("X-Api-Key", "sk-live-tl99xubY47uEyAc6x37pi45RN9LiBbencvgdaQO3")
                .build();
        try (Response response = client.newCall(request).execute()) {
            if (response.body() != null) {
                String jsonResponse = response.body().string();
                // Optionally, parse or filter the response here if needed
                return jsonResponse;
            } else {
                return Map.of("error", "No response body");
            }
        } catch (IOException e) {
            return Map.of("error", "Failed to fetch trending data: " + e.getMessage());
        }
    }

    @GetMapping("/test")
    public String test() {
    return "OK";
}
}