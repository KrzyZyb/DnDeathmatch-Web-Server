package com.dndeathmatch.game.gameplay;

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
}
