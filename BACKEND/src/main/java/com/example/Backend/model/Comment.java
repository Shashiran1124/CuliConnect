package com.example.Backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Date;
/**
 * Comment model class that represents a user comment in the system.
 * Contains id, user info, content, and timestamps.
 * 
 * @author Navodya
 * @version 1.0
 */
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    private String id;// Unique identifier for the comment
    private String userId; // ID of the user who posted the comment
    private String userName; // Name of the user
    private String content;// Content of the comment
    private Date createdAt; // Timestamp when comment was created
    private Date updatedAt;// Timestamp when comment was last updated

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(java.util.Date createdAt) {
        this.createdAt = (Date) createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(java.util.Date updatedAt) {
        this.updatedAt = (Date) updatedAt;
    }
}
