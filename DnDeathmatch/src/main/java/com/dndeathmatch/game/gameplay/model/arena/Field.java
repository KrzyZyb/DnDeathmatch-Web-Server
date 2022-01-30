package com.dndeathmatch.game.gameplay.model.arena;

public class Field {
    private int x;
    private int y;
    private FieldType fieldType;

    private Field(FieldType fieldType, int x, int y){
        this.fieldType = fieldType;
        this.x = x;
        this.y = y;
    }

    public static Field getFieldByType(int fieldTypeId, int x, int y){
        //GET FIELD TYPE BY ORDINAL
        FieldType fieldType = FieldType.values()[fieldTypeId];
        return new Field(fieldType, x, y);
    }
}
