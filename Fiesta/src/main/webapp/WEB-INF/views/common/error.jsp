<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ERROR</title>

    <style>
        body{
            display: flex;
            justify-content: center;
            height: 100vh;
        }

        .error-container{
            width: 800px;
            height: 300px;
            text-align: center;
        }
    
        
        .error-container > h1:first-child {
            margin-bottom: 40px;
            font-size: 150px;
            color: #dd4132;
            font-family: Cookie;
            font-weight: 200;
        }

        .error-container > h2 {
            margin-bottom: 20px;
        }
        
        .error-content-title{
            text-align: left;
            font-weight: bold;
        }

        a{
            color: #dd4132;
            font-weight: bold;
        }

        .btn-area{
            text-align: center;
        }
    
    </style>



</head>
<body>
    <div class="error-container">
        <h1>Fiesta</h1>
        <h2>${errorMessage}</h2>

        <!-- <span class="error-content-title">발생한 예외 : </span> ${e} -->

        <p>
            자세한 문제 원인은 콘솔을 확인해주세요.
        </p>

        <div class="btn-area">
            <!-- <a href="/">로그인</a> -->
            <button type="button" onclick="history.back()">뒤로가기</button>
        </div>
    </div>

</body>
</html>