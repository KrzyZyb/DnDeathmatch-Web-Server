package com.dndeathmatch.game.gameplay.model;

import com.dndeathmatch.game.gameplay.model.arena.Field;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

class ArenaTest {
    int[][] arenaMap;
    Arena arena;

    @BeforeEach
    private void setup(){
        this.arenaMap = drawMap();
        this.arena = Arena.initializeNewArena();
    }

    @Test
    private void shouldMapDrawnMapToArena(){
        Field[][] fields = Arena.mapToGrid(arenaMap);
        Arrays.stream(fields).forEach(row -> Arrays.stream(row).forEach(System.out::println));
    }

    private static int[][] drawMap() {
        return new int[][]{
                {1,0,0,0,0,0,0,0,0,3},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {2,0,0,0,0,0,0,0,0,3}
        };
    }
}