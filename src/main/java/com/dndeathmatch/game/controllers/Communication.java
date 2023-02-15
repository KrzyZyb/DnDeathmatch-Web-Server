package com.dndeathmatch.game.controllers;

import com.dndeathmatch.game.connection.IO.GameStateInput;
import com.dndeathmatch.game.connection.IO.GameStateOutput;
import com.dndeathmatch.game.gameplay.Game;
import com.dndeathmatch.game.gameplay.model.Player;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Communication {
    private Game game;

    public Communication(Game game) {
        this.game = game;
    }

    @MessageMapping("/message")
    @SendTo("/out/message")
    public GameStateOutput processInputFromClient(GameStateInput input) throws Exception {
        Player player = this.game.findPlayer(input.getId());
        return player != null ? this.processRound(input, player) : this.addNewPlayer(input);
    }

    private GameStateOutput addNewPlayer(GameStateInput input) {
        Player player = new Player(input.getId(), input.getName());
        game.addPlayer(player);
        GameStateOutput newState = this.game.processRoundForNewPlayer(player);
        // TODO: EXTEND WITH PLAYER HIDDEN IN RANDOM PROPER LOCATION
        return newState;
    }

    private GameStateOutput processRound(GameStateInput input, Player player) {
        GameStateOutput newState = this.game.processRound(player, input);
        return newState;
    }
}
