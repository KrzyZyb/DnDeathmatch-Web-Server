package com.dndeathmatch.game.gameplay;

import com.dndeathmatch.game.gameplay.model.Arena;
import com.dndeathmatch.game.gameplay.model.Player;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Game {
    List<Player> players;
    Arena arena;
}
