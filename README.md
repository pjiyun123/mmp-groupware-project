# 종합설계프로젝트1[ITEC0401] MMP-GROUPWARE-PROJECT

안녕하세요,
종합설계프로젝트1 강의에서 기업 MMP의 '소규모 기업을 위한 주요 기능 기반의 그룹웨어 개발/연구' 프로젝트를 맡은 4팀입니다.


## 📌 프로젝트 한 줄 소개
저희 4팀은 기업 엠엠피와 함께 '소규모 기업을 위한 주요 기능 기반의 그룹웨어 개발/연구' 프로젝트를 진행하였습니다.     
본 프로젝트를 통해 소규모 기업의 사용자들이 간단하고 편리하게 사용할 수 있는 웹 서비스용 그룹웨어를 개발하고자 합니다.  


## 📌 프로젝트 시연영상 URL
https://youtu.be/dAD7lpAOiBU

## 📌 프로젝트 배포 URL
https://simmpleware.netlify.app/

* 배포 이슈
![image](https://user-images.githubusercontent.com/95159265/209472715-3f5ac719-78e4-4038-b027-f8e4a2d630e4.png)
'cron-job'으로 점검한 결과, 현재까지 서버는 안정된 것으로 확인됨     
그러나 헤로쿠가 자체적으로 유료 버전으로 변경되면서 불안정화될 수 있음


## ✔ 4팀 팀원 소개
- 박지윤(팀장) | pjiyun123
- 엄지영 | thumbzzero
- 정다혜 | JeongDaH
- 홍은솔 | hyo05095


## ✔ 프로젝트 추진 배경 및 필요성
그룹웨어는 다양하게 사용되고 있지만, 큰 규모의 기업을 기준으로 만들어진 기존의 그룹웨어는 과도하게 많은 기능들이 탑재되어 있어서 소규모 기업의 사용자들이 해당 그룹웨어에 쉽게 적응하거나 활용하기 힘들고, 이에 사용하기 어려운 기능들은 대부분 방치된 채 비용만 발생시킨다.      
그에 따라 사용자들이 실제로 이용하는 서비스에 집중하여 개발하고 관리함으로써 기능 이용에 대한 편리성을 높일 수 있고, 방치되는 기능들을 유지, 보수하는데 발생하는 비용을 절감하여 경제적 효과를 거둘 수 있기에 본 프로젝트의 필요성이 대두된다.  


## ✔ 프로젝트 내용 및 추진 방법
- 본 프로젝트를 크게 세 가지 파트로 나누었다.

1. 직원 관리
 - 직원 계정 등록 기능 제공
 - 직원 정보 조회 기능 제공
 
2. 업무 내용 공유 및 관리
 - 캘린더 형식의 일정 공유 기능 제공
 - 게시판 형식의 일정 공유 기능 제공
 - 참고 파일 업로드 다운로드 기능 제공
  
3. 보고 및 결재
 - 연차, 업무 보고 등의 기안/결재 기능 제공
 - 참고 파일 업로드 다운로드 기능 제공


## ✔ 프로젝트 개발 환경
- Web Browser  
Chrome  
- IDE  
Frontend : Visual Studio Code  
Backend : IntelliJ  


## ✔ 프로젝트 기술 스택
- ✨ Frontend  
 Javascript  
 React  
 Axios  
 CSS  
 CSS Module  
 yarn    
 Web Storage  
 Netlify

- ✨ Backend            
 Spring Boot Actuator     
 Spring Web            
 Spring Data JPA           
 Rest Repositories           
 Rest Repositories HAL Explorer            
 Spring Security          
 H2 Database         
 MySQL Driver         
 Lombok          
 Spring Boot DevTools       
 Spring Configuration Processor            
 Heroku               


## ✔ 프로젝트 상세 기능 명세
#### 1. 직원 관리 기능
- 관리자는 직원 계정을 등록한다.
- 사용자와 관리자는 로그인한다.
- 사용자 계정의 아이디는 사원 번호이다.
- 관리자는 직원 목록과 직원 정보를 등록/조회/수정/삭제한다.
- 운영자는 직원 목록과 직원 정보를 등록/조회/수정/삭제한다.
- 사용자는 본인의 직원 정보를 조회한다.
- 사용자는 직원 목록을 조회한다.     

#### 2. 업무 내용 공유 및 관리
- 로그인된 사용자는 캘린더 형식의 게시판에 일정을 등록/조회/수정/삭제한다.
   - 일정의 수정/삭제는 해당 일정의 작성자만 가능하다.
   - 등록한 일정은 사용자 모두가 조회할 수 있다.
- 운영자는 등록된 일정을 삭제한다.
- 로그인된 사용자는 게시판 형식의 업무일지를 등록/조회/수정/삭제한다.
   - 업무일지의 수정/삭제는 해당 업무일지의 작성자만 가능하다.
   - 등록한 업무일지는 사용자 모두가 조회할 수 있다.
- 운영자는 등록된 업무일지를 삭제한다.     

#### 3. 보고 및 결재 기능
- 운영자는 결재 문서 양식을 등록/수정/조회/삭제한다.
- 운영자는 결재 문서 양식별 결재자를 등록/수정/조회/삭제한다.
- 로그인된 사용자는 결재 문서를 작성함으로써 결재를 요청한다. (이하 ‘요청자’라고 칭함)
- 요청자는 결재를 요청할 때 관련 파일을 업로드한다.
- 요청자는 해당 문서의 처리 상태가 결재 완료로 변경되기 전에 결재 문서를 수정/삭제할 수 있다.
- 운영자는 결재 문서의 상태와 상관없이 문서를 삭제할 수 있다.
- 결재자는 기안을 조회한다.
- 결재자는 요청자가 작성한 결재 문서에 첨부된 파일을 다운로드한다.
- 결재자는 기안을 결재하거나 반려한다.
- 요청자는 반려된 문서를 수정/삭제한다.
- 결재 완료되기 전의 문서는 해당 문서의 요청자와 결재자만 조회할 수 있다.
- 결재 완료된 문서는 모든 사용자가 조회할 수 있다.      


## ✔ 프로젝트 상세 화면 명세
#### [초기 화면]
![image](https://user-images.githubusercontent.com/95159265/209446453-9f0d8190-5af2-4b06-bbd1-c0eec9b99dbc.png)

#### [마이페이지(직원 정보 조회)]
![image](https://user-images.githubusercontent.com/95159265/209446471-d2609faa-d13c-4e2e-8fc2-7927055a0b01.png)

#### [직원 정보 수정]
![image](https://user-images.githubusercontent.com/95159265/209446552-f060a0cd-dfb5-47b0-93e9-6ec46e4eac52.png)

#### [직원 목록 조회]
![image](https://user-images.githubusercontent.com/95159265/209446573-98c490e0-1816-4ec7-985d-0f1261179b59.png)

#### [직원 계정 생성]
![image](https://user-images.githubusercontent.com/95159265/209446583-fa49dc24-5822-4c83-a528-0b904b1a2a7a.png)

#### [직원 계정 삭제]
![image](https://user-images.githubusercontent.com/95159265/209446590-b784bc56-6c85-4721-a0e7-7d2761714b0c.png)

#### [일정 조회]
![image](https://user-images.githubusercontent.com/95159265/209446599-f55d9c56-ffc1-47dd-9521-ad90174671fc.png)

#### [일정 등록]
![image](https://user-images.githubusercontent.com/95159265/209446609-6553f8c4-0a15-4430-a7e1-b35e763411a9.png)

#### [업무일지 목록 조회]
![image](https://user-images.githubusercontent.com/95159265/209446615-5a27e107-23ec-47e5-b07e-1944eea5da6b.png)

#### [업무일지 등록]
![image](https://user-images.githubusercontent.com/95159265/209446618-cb7ccf4b-4da9-4097-b3f5-86050d4effcb.png)

#### [결재 완료된 문서 조회]
![image](https://user-images.githubusercontent.com/95159265/209446624-85a75f1f-f2cf-4011-9382-c77ce915fb66.png)

#### [결재 요청 문서 조회]
![image](https://user-images.githubusercontent.com/95159265/209446632-a923440c-fdb5-4a5c-b66e-ddc74c129c68.png)

#### [결재 문서 등록]
![image](https://user-images.githubusercontent.com/95159265/209446639-ba1bdc0f-1ee8-4871-acf0-0ca8995a4d23.png)

#### [결재 문서 양식 목록 조회]
![image](https://user-images.githubusercontent.com/95159265/209446646-ec00f618-ef23-4c7b-aa71-9f977f2fbc94.png)

#### [결재 문서 양식 조회]
![image](https://user-images.githubusercontent.com/95159265/209446653-8209d1d9-270d-4ba1-9d91-b2561c06bde2.png)

#### [결재할 문서 목록 조회]
![image](https://user-images.githubusercontent.com/95159265/209446658-7e5025d3-4270-4219-80d8-edae2911681a.png)

#### [결재 진행]
![image](https://user-images.githubusercontent.com/95159265/209446665-9a3234dc-edb0-4572-a097-63b6a4ce2bd3.png)


## ✔ 프로젝트 기대 효과
🏃‍♀️ 원활한 업무 공유 및 진행 상황 파악   
🏃‍♀️ 용이한 일정 관리    
🏃‍♀️ 실시간 접속 가능     
🏃‍♀️ 비용 절감      


## ✔ 프로젝트 관련 성과 및 산출물
1. 한국정보기술학회에 논문 '소규모 기업을 위한 주요 기능 기반의 그룹웨어 시스템'을 등재하여 우수 논문상을 수상함  
![image](https://user-images.githubusercontent.com/95159265/209446049-235f26b2-9d1e-44e6-8d2e-200bf88e2d4d.png)

2. 한국저작권위원회에 본 프로젝트에 대한 SW등록증을 신청하였고, 현재 심사 중에 있음


