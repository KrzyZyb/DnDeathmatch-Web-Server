package com.dndeathmatch.game.connection.IO;

import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.Date;

@Setter
@Getter
public class GameStateOutput {

    public GameStateOutput() {
        this.date = Date.from(Instant.now());
    }
    private String player;
    private String id;
    private Date date;
}
