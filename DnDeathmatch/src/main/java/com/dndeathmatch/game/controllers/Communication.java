package com.dndeathmatch.game.controllers;

import com.dndeathmatch.game.connection.IO.GameStateInput;
import com.dndeathmatch.game.connection.IO.GameStateOutput;
import com.dndeathmatch.game.gameplay.Game;
import com.dndeathmatch.game.gameplay.model.Player;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class Communication {
    private Game game;


    public Communication(Game game) {
        this.game = game;
    }

    @MessageMapping("/message")
    @SendTo("/out/message")
    public GameStateOutput send(GameStateInput input) throws Exception {
        GameStateOutput newState = new GameStateOutput();
        Player player = new Player(input.getId(), input.getName());
        game.addPlayer(player);
        newState.setId("Id");
        newState.setPlayer("Player");
        return newState;
    }

}
