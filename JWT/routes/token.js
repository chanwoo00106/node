const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { verifyToken } = require('./middlewares')

const router = express.Router();

// 토큰을 발급하는 라우터
router.post('/', async(req, res) => {
    try {
        // 대충 DB에서 사용자 정보를 찾는 코드: 대충 id, nick 정보를 찾았다고 가정
        // API 키를 발급하여 사용하면 좋음(?)
        const id = 'chanwoo';
        const nick = 'Teemo';

        // jwt.sign() 메소드: 토큰 발급
        const token = jwt.sign({
            id,
            nick,
        }, process.env.JWT_SECRET, {
            expiresIn: '1m',
            issuer: '토큰발급자',
        });
        return res.json({
            code: 200,
            message: '토큰이 발급되었습니다.',
            token,
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        })
    }
});

// 발급된 토큰을 테스트하는 라우터
router.get('/test', verifyToken, (req, res) => {
    res.json(req.decoded);
});

module.exports = router;