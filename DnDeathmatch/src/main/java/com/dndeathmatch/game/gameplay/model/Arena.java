package com.dndeathmatch.game.gameplay.model;

import com.dndeathmatch.game.gameplay.model.arena.Field;
import com.dndeathmatch.game.gameplay.utils.ArenaGenerator;
import org.springframework.stereotype.Component;

@Component
public class Arena {
    private Field[][] grid;

    private Arena() {
        this.grid = ArenaGenerator.initializeGrid();
    }
}
