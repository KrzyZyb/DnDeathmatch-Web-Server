package com.dndeathmatch.game.controllers;

import com.dndeathmatch.game.connection.IO.GameStateInput;
import com.dndeathmatch.game.connection.IO.GameStateOutput;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class Communication {

    @MessageMapping("/hello")
    @SendTo("/topic/hi") //ENDPOINT TO SUBSCRIBE ON FRONTEND LISTENERS
    public GameStateOutput send(GameStateInput input) throws Exception {
        System.out.println("Backend endpoint websocket ping");
        GameStateOutput newState = new GameStateOutput();
        newState.setId("Id");
        newState.setPlayer("Player");
        return newState;
    }

}
