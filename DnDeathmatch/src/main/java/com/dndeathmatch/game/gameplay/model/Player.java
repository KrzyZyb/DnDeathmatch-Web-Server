package com.dndeathmatch.game.gameplay.model;

import com.dndeathmatch.game.gameplay.model.classes.CharacterClass;

public class Player {
    private String name;
    private String id;
    private CharacterClass characterClass;

    public Player(String id, String name) {
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public CharacterClass getCharacterClass() {
        return characterClass;
    }

    public void setCharacterClass(CharacterClass characterClass) {
        this.characterClass = characterClass;
    }
}
