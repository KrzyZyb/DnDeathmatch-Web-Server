package com.dndeathmatch.game.gameplay.model;

public class Arena {
    private static Arena arena;

    private Arena() {
    }

    public static Arena initializeNewArena() {
        arena = new Arena();
        return arena;
    }
}
