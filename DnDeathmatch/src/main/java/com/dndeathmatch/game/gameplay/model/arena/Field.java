package com.dndeathmatch.game.gameplay.model.arena;

import java.awt.*;

public class Field {
    private Point point;
    private FieldType fieldType;

    private Field(FieldType fieldType, Point point){
        this.fieldType = fieldType;
        this.point = point;
    }

    public static Field getFieldByType(int fieldTypeId, Point point){
        //GET FIELD TYPE BY ORDINAL
        FieldType fieldType = FieldType.values()[fieldTypeId];
        return new Field(fieldType, point);
    }

    @Override
    public String toString() {
        return "Field{" +
                "coords=[" + point.x +"/"+point.y +"]"+
                ", fieldType=" + fieldType.toString() +
                '}';
    }
}
