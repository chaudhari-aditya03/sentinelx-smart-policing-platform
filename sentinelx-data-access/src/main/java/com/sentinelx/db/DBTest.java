package com.sentinelx.db;

import java.sql.Connection;

public class DBTest {
    public static void main(String[] args) {
        try (Connection con = DBConnection.getConnection()) {
            System.out.println("Database Connected Successfully!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
