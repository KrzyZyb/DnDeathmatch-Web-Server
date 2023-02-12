package com.dndeathmatch.game.gameplay;

import com.dndeathmatch.game.connection.IO.GameStateInput;
import com.dndeathmatch.game.connection.IO.GameStateOutput;
import com.dndeathmatch.game.gameplay.model.Arena;
import com.dndeathmatch.game.gameplay.model.Player;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class Game {
    private int round = 0;
    private final Map<String,Player> players;
    private Arena arena;


    public Game(final Arena arena) {
        this.players = new HashMap<>();
        this.arena = arena;
    }

    public void addPlayer(Player player){
        this.players.put(player.getId(), player);
    }

    public GameStateOutput processRoundForNewPlayer(Player player){
        GameStateOutput gameStateOutput = new GameStateOutput();
        gameStateOutput.setPlayer(player.getName());
        gameStateOutput.setId(player.getId());
        return gameStateOutput;
    }

    public GameStateOutput processRound(Player player, GameStateInput input){
        GameStateOutput gameStateOutput = new GameStateOutput();
        gameStateOutput.setPlayer(player.getName());
        gameStateOutput.setId(player.getId());
        return gameStateOutput;
    }

    public Player findPlayer(String id) {
        return this.players.get(id);
    }
}
