package com.dndeathmatch.game.gameplay.model;

import com.dndeathmatch.game.gameplay.model.arena.Field;
import com.dndeathmatch.game.gameplay.model.arena.FieldType;

import java.awt.*;
import java.util.Arrays;

public class Arena {
    private static Arena arena;
    private static Field[][] grid;

    private Arena() {
    }

    public static Arena initializeNewArena() {
        arena = new Arena();
        grid = initializeGrid();
        return arena;
    }

    private static Field[][] initializeGrid() {
        int[][] map = drawMap();
        return mapToGrid(map);
    }

    public static Field[][] mapToGrid(int[][] map) {
        int arenaHeight = map.length;
        int arenaWidth = map[0].length;
        Field[][] arena = new Field[arenaHeight][arenaWidth];

        for(int row = 0; row < arenaHeight; row++){
            int yCoordinate = ((arenaHeight-1)-row);
            for(int tile = 0; tile < arenaWidth; tile++){
                int xCoordinate = tile;
                int fieldTypeValueFromMap = map[row][tile];
                Point coordinates = new Point(xCoordinate,yCoordinate);
                arena[yCoordinate][xCoordinate] = Field.getFieldByType(fieldTypeValueFromMap, coordinates);
            }
        }
        return arena;
    }

    private static int[][] drawMap() {
        return new int[][]{
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0}
        };
    }
}
