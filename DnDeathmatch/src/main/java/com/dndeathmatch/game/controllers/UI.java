package com.dndeathmatch.game.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/UI")
public class UI {

    @GetMapping(value = "/hello")
    public @ResponseBody
    String getHelloData() {
        System.out.println("Ping on backend side");
        return "Hello";
    }

}
