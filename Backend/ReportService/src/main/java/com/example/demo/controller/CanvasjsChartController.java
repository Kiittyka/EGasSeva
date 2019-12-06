package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.CanvasjsChartService;
 

 
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/canvasjschart")
public class CanvasjsChartController {
 
	@Autowired
	private CanvasjsChartService canvasjsChartService;
 
	@GetMapping("/chart")
	public List springMVC(ModelMap modelMap) {
		List<List<Map<Object, Object>>> canvasjsDataList = canvasjsChartService.getCanvasjsChartData (); 
		
		modelMap.addAttribute("dataPointsList", canvasjsDataList);
		System.out.println(canvasjsDataList);
		return canvasjsDataList;
	}
 
}
