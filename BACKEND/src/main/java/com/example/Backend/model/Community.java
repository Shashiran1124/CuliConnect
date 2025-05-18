package com.example.Backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "communities")
public class Community {
    @Id
    private String id;  // Unique identifier for the community
    private String name;  // Community name
    private String description;  // Community description
    private String category;  // Category this community belongs to
    private boolean isPrivate;  // Flag to indicate if community is private
    private String creatorId;  // ID of the user who created the community
    private Set<String> memberIds;  // Set of user IDs who are members
    private Set<String> adminIds;   // Set of user IDs who are admins
    private String createdAt;  // Creation timestamp
    private String updatedAt;  // Last updated timestamp

    public Community() {
        this.memberIds = new HashSet<>();
        this.adminIds = new HashSet<>();
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean isPrivate() {
        return isPrivate;
    }

    public void setPrivate(boolean isPrivate) {
        this.isPrivate = isPrivate;
    }

    public String getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(String creatorId) {
        this.creatorId = creatorId;
    }

    public Set<String> getMemberIds() {
        return memberIds;
    }

    public void setMemberIds(Set<String> memberIds) {
        this.memberIds = memberIds;
    }

    public Set<String> getAdminIds() {
        return adminIds;
    }

    public void setAdminIds(Set<String> adminIds) {
        this.adminIds = adminIds;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

     // TODO: Consider adding a community status field (e.g., ACTIVE, DELETED)
    // TODO: Add audit log tracking for admin/member changes
} 