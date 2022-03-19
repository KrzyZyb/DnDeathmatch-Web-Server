package com.dndeathmatch.game.gameplay.model.arena;

import org.springframework.security.core.parameters.P;

import java.awt.*;

public class Field {
    private final Point point;
    private final Point[] edges;
    private final FieldType fieldType;

    private Field(FieldType fieldType, Point point){
        this.fieldType = fieldType;
        this.point = point;
        this.edges = this.setEdges(point);
    }

    private Point[] setEdges(Point point) {
        Point bottomLeft = point;
        Point upperLeft = new Point(point.x, point.y+1);
        Point upperRight = new Point(point.x+1, point.y+1);
        Point bottomRight = new Point(point.x+1, point.y);
        return new Point[]{bottomLeft, upperLeft, upperRight, bottomRight};
    }

    public static Field getFieldByType(int fieldTypeId, Point point){
        //GET FIELD TYPE BY ORDINAL
        FieldType fieldType = FieldType.values()[fieldTypeId];
        return new Field(fieldType, point);
    }

    public Point[] getEdges(){
        return edges;
    }

    @Override
    public String toString() {
        return "Field{" +
                "coords=[" + point.x +"/"+point.y +"]"+
                ", fieldType=" + fieldType.toString() +
                '}';
    }
}
