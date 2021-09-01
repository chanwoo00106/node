const jwt = require('jsonwebtoken');

exports.vrifyToken = (req, res, next) => {
    // 인증 완료
    try {
        // 요청 헤더에 저장된 토큰(req.headers.authorization)과 비밀키를 사용하여 토큰 반환
        req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        return next();
    } catch (e) {
        if (e.name === 'TokenExpiredError'){
            return res.state(419).json({
                code: 419,
                message: '토큰이 만료되었습니다.'
            });
        }
        return res.status(401).json({
            code: 419,
            message: '유효하지 않은 토큰입니다.'
        })
    }
}