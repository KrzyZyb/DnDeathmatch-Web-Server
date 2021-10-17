package com.dndeathmatch.game.controllers;

import com.dndeathmatch.game.model.GameState;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/UI")
public class UI {

    @GetMapping(value = "/hello")
    public @ResponseBody
    GameState getGameState() {
        GameState state = new GameState();
        state.setId("Id");
        state.setPlayer("Player");
        System.out.println("Ping on backend side");
        return state;
    }

}
