package com.dndeathmatch.game.gameplay;

import com.dndeathmatch.game.gameplay.model.Arena;
import com.dndeathmatch.game.gameplay.model.Player;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Game {
    private int round = 0;
    private List<Player> players;
    private Arena arena;


    public Game(final Arena arena) {
        this.players = new ArrayList<>();
        this.arena = arena;
    }

    public void addPlayer(Player player){
        this.players.add(player);
    }
}
