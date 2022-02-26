import express from 'express';
import mongoose from 'mongoose';

import PostForm from '../models/postForm';



exports.getPosts = async (req, res) => { 
    try {
        const postMessages = await PostForm.find();
                
        res.status(200).json(PostForm);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostForm.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.createPost = async (req, res) => {
    const { id, name, surname, email, tel,tutar } = req.body;

    const newPostForm = new PostForm({ id, name, surname, email, tel,tutar  })

    try {
        await newPostForm.save();

        res.status(201).json(newPostForm );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


