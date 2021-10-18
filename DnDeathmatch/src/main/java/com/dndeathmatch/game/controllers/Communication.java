package com.dndeathmatch.game.controllers;

import com.dndeathmatch.game.connection.IO.GameStateInput;
import com.dndeathmatch.game.connection.IO.GameStateOutput;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class Communication {

    @MessageMapping("/message")
    @SendTo("/out/message")
    public GameStateOutput send(GameStateInput input) throws Exception {
        GameStateOutput newState = new GameStateOutput();
        newState.setId("Id");
        newState.setPlayer("Player");
        return newState;
    }

}
