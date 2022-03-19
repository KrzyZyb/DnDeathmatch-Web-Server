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

    private Point[] setEdges(Point topLeft) {
        Point bottomLeft = new Point(topLeft.x, topLeft.y+1);
        Point bottomRight = new Point(topLeft.x+1, topLeft.y+1);
        Point topRight = new Point(topLeft.x+1, topLeft.y);
        return new Point[]{topLeft, bottomLeft, bottomRight, topRight};
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
