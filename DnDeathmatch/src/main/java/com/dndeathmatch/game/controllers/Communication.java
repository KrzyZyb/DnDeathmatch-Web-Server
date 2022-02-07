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
    public GameStateOutput processInputFromClient(GameStateInput input) throws Exception {
        return this.game.isPlayerInGame(input.getId()) ? this.processRound(input) : this.addNewPlayer(input);
    }

    private GameStateOutput addNewPlayer(GameStateInput input) {
        Player player = new Player(input.getId(), input.getName());
        GameStateOutput newState = new GameStateOutput();
        game.addPlayer(player);
        // TODO: EXTEND WITH PLAYER HIDDEN IN RANDOM PROPER LOCATION
        return newState;

    }

    private GameStateOutput processRound(GameStateInput input) {
        //TODO: PROCESS ROUND
        return new GameStateOutput();
    }

}
