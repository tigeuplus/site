---
sidebar_position: 3
slug: /core/description/whitepaper
title: 백서
---

# 백서

## 1. 서론

온라인 거래가 오프라인 거래보다 대중화 되어 가고 있는 와중에 완벽한 보안을 위한 시도로 최초의 암호화폐인 비트코인이 생겨났다. 하지만 비트코인은 치명적인 문제가 조금씩 존재하였고 이를 해결하기 위해 수많은 알트코인이 여러 시도를 하고 있지만 지금까지 완벽하게 해결한 알트코인은 존재하지 않는다.

비트코인의 치명적인 두 개의 문제는 거래 처리 속도와 수수료이다. 비트코인의 TPS(거래 처리 속도)는 7이다. 하지만 글로벌 금융 네트워크 회사인 VISA의 TPS는 2만 4000으로 약 3,429배다. 거래 수수료는 전송 금액에 대한 수수료가 아닌 거래 바이트 수에 대한 수수료이므로 소량을 전송하는 거래의 경우 전송량보다 전송 수수료가 더 비싼 경우가 많다.

중앙 집권이 되어 있는 현재의 금융권을 탈중앙화로 가는 길을 열고 암호화폐가 더 화폐의 역할을 할 수 있도록 하는 것이 이 프로젝트의 메인 핵심이다.

<br/>
<br/>

## 2. 비트코인의 문제

거래에서 중요한 것은 속도라고 생각한다. 앞에서 말한 것처럼 비트코인 TPS로 VISA의 TPS를 따라잡는 것은 힘들다. 비트코인에서 거래 처리 속도를 해결하기 위해선 먼저 비트코인의 여러 문제를 해결할 필요가 있다.


### 2-1. 블록체인 트릴레마

가장 먼저 해결해야 하는 것은 블록체인 트릴레마다. 블록체인 트릴레마는 보안성, 확장성, 탈중앙화 모두를 한 번에 잡는 것이 힘들다는 문제다. 확장성을 늘리기 위해서는 이 블록체인 트릴레마를 효과적으로 해결해야 할 필요가 있다.


#### 2-1-1. 보안성

보안을 위해서는 매우 빠른 거래 처리가 불가능하다. 비트코인은 10분마다 하나의 블록을 생성하는데 이 시간이 빠를수록 악의적인 블록도 빨리 네트워크에 검증할 수 있다는 것이기에 확장하기 매우 힘든 문제가 있다.

#### 2-1-2. 탈중앙성

네트워크를 구성하는 여러 피어가 동일한 블록체인을 구성하도록 하기 위해 복잡한 과정을 거친다. 이 복잡한 과정은 시간도 잡아먹기에 이는 TPS를 높이는 걸림돌이 된다. 무조건 신뢰할 수 있는 피어로만 네트워크가 이루어져 있다면 TPS는 많이 늘릴 수 있지만 그렇게 된다면 탈중앙화에서 멀어지는 것이기에 불가능하다.


#### 2-1-3. 확장성

확장하기 위해서는 채굴자의 부담이 늘어날 수밖에 없다. 블럭의 크기가 커지면 디도스 공격이 쉬워져 보안이 떨어지고 더 자주 저장하기엔 합의 과정이 짧아져 이 또한 보안이 떨어진다. 앞에서 언급하였듯이 신뢰할 수 있는 피어로만 네트워크가 이루어져 있다면 확장이 매우 쉽지만, 이는 탈중앙화에서 멀어지는 길이기에 문제가 있다.

<br/>

### 2-2. 거래 처리 속도

비트코인의 TPS는 7, VISA의 TPS는 2만 4000으로 약 3,429배라고 앞에서 언급하였다. 이는 대부분의 암호화폐도 마찬가지다. 이더리움은 약 10~30TPS, 리플은 1,000TPS, 이오스는 3,000TPS, 이오스는 3,000TPS로 2만 4,000을 따라잡기는 힘들다. 만약에 따라잡은 암호화폐가 있다고 하여도 블록체인 트릴레마에 걸려 보안이나 탈중앙화를 포기하였을 확률이 높다. 그러므로 이 거래 처리 속도는 너무나도 큰 문제다.


### 2-3. 거래 수수료

비트코인은 1억 개로 나누어 사용할 수 있다. 하지만 문제는 거래 수수료 때문에 의미가 없다. 0.00000001 BTC를 전송하려면 전송 수량보다 수수료가 비싼 배보다 배꼽이 큰 상황이 발생한다. 이는 비트코인이 쪼개지는 의미가 없으니 문제로 볼 수 있다.


### 2-4. 채굴 난이도 && 51% 공격

비트코인의 채굴 난이도는 블록 채굴 시간 10분을 기준으로 변경된다. 예를 들면 블록이 10분보다 빨리 생성되면 채굴 난이도가 높아지고 늦게 생성되면 채굴 난이도가 낮아지는 방식이다. 문제는 여기서 발생한다. 비트코인은 가격이 상당하다. 그래서 채굴자가 많아졌고 채굴자끼리의 경쟁으로 채굴 난이도는 자연스럽게 높아졌다.

그래서 일반 사람은 블록 하나 채굴이 불가능하였고 모든 채굴 권한이 비트코인 채굴 기업들에게 몰리는 현상이 발생하였고 사람들은 이를 해결하기 위해 채굴풀이라는 것을 만들었다. 채굴풀이란 하나의 블록을 여러 컴퓨터가 부분적으로 해시를 계산해서 속도를 높이는 것인데 사람들은 믿을 수 있는 채굴풀을 원하기 시작했다.

당연하게도 사람들은 과도하게 모이기 시작했고 비트코인은 해시 파워가 51%를 넘어가면 공격이 가능한 문제가 존재하였는데 한 채굴풀에서 사람이 너무 많이 모여 해시 파워가 51%를 넘었던 적도 있었다.

이처럼 개인이 감당하기는 너무 힘들고 이는 탈중앙화에서 멀어지는 것이다.

<br/>
<br/>

## 3. 솔루션

블록체인 트릴레마처럼 균형이 맞지 않는 것은 예상하기 힘든 수준의 큰 결과를 발생한다. 그렇기에 신중하고 깊이 있게 접근하여 균형을 잘 맞추는 것이 중요하다. 네트워크의 무결성은 지키면서 속도는 높이는 방법을 잘 찾아야 한다.


### 3-1. 거미줄 알고리즘(Cobweb Algorithm)

암호화폐 Tigeu에서는 기존에서 시도하지 않던 시도를 해볼 것이다. 이는 불안정할 수 있는 암호화폐의 새로운 길을 열기 위해서는 누군가는 해봐야 할 시도다. 거미줄 알고리즘은 방향성 비순환 그래프(DAG)를 기초로 구현한다.

거래가 거래를 승인하는 특이한 방식으로 블록체인에 있던 블록은 존재하지 않는다. 그래서 블록 채굴 보상도 존재하지 않으며 네트워크 구성자는 암호화폐 사용자여서 거래 수수료 문제도 해결할 수 있다.


#### 3-1-1. 거래(Transaction)

거래는 별로 다를 것이 없다. 전송 데이터(transfers)와 해시(hash), 문제의 답(nonce), 작성자(author), 생성된 시간(created) 등으로 이루어져 있는데 특별한 점은 승인할 대상(targets)이 존재한다는 것이다.

승인할 대상은 2개까지 승인이 가능하며 이 거래는 네트워크에서 마지막으로 승인받은 거래 중 랜덤으로 하나를 뽑아 그 거래를 승인하는 거래에서 하나, 그 거래가 승인하는 거래에서 하나 뽑아 거래가 참이라면 결정된다. (만약에 아니라면 다른 거래를 선출한다)


#### 3-1-2. 거미(Spider)

블록체인의 블록을 대신하여 거미를 사용한다. 거미의 구조는 거래(transaction), 자신을 승인하는 거미(spiders) 등으로 이루어져 있다. 자신을 승인하는 거래는 무한하며 총 100번 승인받으면 확정 승인 받아 로컬 데이터에 저장된다.


#### 3-1-3. 거미줄(Cobweb)

거미줄 알고리즘에선 블록체인 대신 거미줄이 존재한다. 이 거미줄은 엮인 것을 담고 있으며 별다른 의미는 없다.

#### 3-1-4. 거래 무작위 선출 알고리즘

거래 무작위 선출 방식은 매우 간단하게 진행된다.

```
1) 마지막으로 승인받은 두 거래를 x1, x2라 가정

2) x1, x2 중에서 임의로 하나 뽑기 -> x라 가정

3) x가 승인하는 거래가 있는가 || x를 승인하는 거래가 없는가?

    3-1) 참이라면 임의의 거래 하나 뽑고 검증

        3-1-1) 검증 결과가 참이라면 확신도 +1

        3-1-2) 아니라면 3으로 점프

    3-2) 아니라면 x를 승인하는 거래가 있는가?

        3-2-1) 참이라면 임의의 거래 하나 뽑고 검증

            3-2-1-1) 검증 결과가 참이라면 확신도 +1

            3-2-1-2) 아니라면 3으로 점프

        3-2-2) 아니라면 x의 확신도 +1

4) 확신도가 가장 높은 두 거래를 승인
```

실제로는 두 거래를 다르게 구하긴 하지만 대략적인 방식으로는 이렇다. 이 방식을 이용하여 네트워크의 무결성을 구성한다.

#### 3-1-5. 거래 확정 합의

방금까지 설명한 알고리즘에는 허점이 존재한다. 바로 거래를 확정 지을 수 없다는 것이다. 블록체인에서는 블록이 거래를 확정 지었는데 블록체인에서는 없다. 그렇기에 수많은 피어가 서로 합의를 거치지 않고 비동기식으로 거래를 확정 합의하는 방법을 찾아야 한다. 또, 잘못된 거래도 충분히 네트워크상에 존재할 수 있기에 정크 거래를 처리하는 알고리즘도 있어야 한다.

우선 거래를 확정 승인하는 알고리즘을 구성해야 한다. 오류가 존재하더라도 일정 횟수를 넘으면 확정 승인을 받아야 한다. 그 승인은 100번 승인으로 가정한다. (이 승인 횟수는 테스트 횟수로 변경될 수 있다)

그다음은 악성 거래가 악성 승인하거나 정크 거래로 남는 것을 해결해야 한다. 정상적 거래는 악성 거래보다 더 많을 것이므로 정상적 거래에 기초하여 악성 거래를 해결할 것이다. 다음은 악성 거래와 정크 거래를 제거하는 조건식이다.

```
a) 먼저 생긴 거래와 이 거래를 승인하는 거래보다 승인 횟수가 과도하게 많은가?

b) 자신이 승인하는 거래가 모두 다 승인되었는데 자신은 한 번도 승인받지 못하였는가?
```

a의 거래 식으로 악성 거래를 묶을 수 있고 b의 거래 식으로 정크 거래를 처리할 수 있다.

#### 3-1-6. 인센티브

블록체인에서 네트워크 구성자는 채굴자로 채굴자는 자신과 관련 없는 거래도 채굴하며 인센티브를 받아 왔는데 이 알고리즘에서는 거래가 거래를 검증하는 방식으로 암호화폐 사용자가 자신의 거래가 체결되려면 네트워크를 구성해야 해서 인센티브가 필요 없다는 장점이 있다.

그래서 이 알고리즘은 거래 수수료나 블록 채굴 보상 같은 인센티브는 존재하지 않는다.

<br/>

### 3-2. 쉬운 난이도

거미줄 알고리즘과 동시에 네트워크 붕괴를 막기 위해서 약간의 문제를 풀어야 거래를 네트워크에 올릴 수 있다. 비트코인은 매우 높은 난이도지만 이 프로젝트에서는 난이도가 변하지 않고  매우 낮은 난이도를 유지한다.


### 3-3. 다양한 플랫폼

비트코인은 C++ 코드로 짜여져 있다. 하지만 C++은 난이도 있는 프로그래밍 언어여서 일반 사람이 공부하여 비트코인을 이용한 기술을 만들기는 어렵다. 그렇기에 여기에서는 메인 코드는 Typescript로 작동하지만 Kotlin, C, C++ 등 다양한 언어에 맞춘 암호화폐 코어를 제작할 것 이다.