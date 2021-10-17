package com.dndeathmatch.game.controllers;

import com.dndeathmatch.game.connection.IO.GameStateInput;
import com.dndeathmatch.game.connection.IO.GameStateOutput;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api")
public class Communication {

    @GetMapping(value = "/process")
    public @ResponseBody
    GameStateOutput updateGameState() {
        GameStateOutput state = new GameStateOutput();
        state.setId("Id");
        state.setPlayer("Player");
        System.out.println("Ping on backend side");
        return state;
    }

    @MessageMapping("/chat")
    @SendTo("/topic/messages") //ENDPOINT TO SUBSCRIBE ON FRONTEND LISTENERS
    public GameStateOutput send(GameStateInput input) throws Exception {
        GameStateOutput newState = new GameStateOutput();
        newState.setId("Id");
        newState.setPlayer("Player");
        return newState;
    }

}
