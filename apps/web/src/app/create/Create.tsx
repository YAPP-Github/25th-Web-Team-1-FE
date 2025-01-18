'use client';

import {
  Breadcrumb,
  TextField,
  Button,
  Label,
  Icon,
  Text,
  Spacing,
  RadioCards,
} from '@repo/ui';
import Link from 'next/link';
import * as styles from './pageStyle.css';

export default function Create() {
  return (
    <div className={styles.mainStyle}>
      {/* 헤더 */}
      <div className={styles.headerStyle}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/create">
              <Icon name="stack" size={32} color="grey900" />
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Button
          size="large"
          variant="primary"
          leftAddon={<Icon name="twinkle" />}
        >
          생성하기
        </Button>
      </div>
      <Spacing size={80} />
      <Text.H1 className={styles.gradientTitleStyle}>
        어떤 글을 생성할까요?
      </Text.H1>
      <div className={styles.containerStyle}>
        {/* 메인 컨텐츠 */}
        <div className={styles.contentStyle}>
          <div className={styles.sectionStyle}>
            {/* 주제 */}
            <TextField id="basic-field">
              <TextField.Label variant="required">주제</TextField.Label>
              <TextField.Input
                placeholder="주제를 적어주세요"
                maxLength={5000}
              />
            </TextField>
          </div>

          {/* 목적 */}
          <div className={styles.sectionStyle}>
            <Label>목적</Label>
            <RadioCards defaultValue="1" columns={4}>
              <RadioCards.Item value="1">
                <RadioCards.HeaderWrapper>
                  <RadioCards.Icon name="document" size={24} />
                  <RadioCards.Label>정보 제공</RadioCards.Label>
                </RadioCards.HeaderWrapper>
              </RadioCards.Item>

              <RadioCards.Item value="2">
                <RadioCards.HeaderWrapper>
                  <RadioCards.Icon name="chat" size={24} />
                  <RadioCards.Label>의견 표출</RadioCards.Label>
                </RadioCards.HeaderWrapper>
              </RadioCards.Item>

              <RadioCards.Item value="3">
                <RadioCards.HeaderWrapper>
                  <RadioCards.Icon name="smile" size={24} />
                  <RadioCards.Label>공감/유머</RadioCards.Label>
                </RadioCards.HeaderWrapper>
              </RadioCards.Item>

              <RadioCards.Item value="4">
                <RadioCards.HeaderWrapper>
                  <RadioCards.Icon name="shopping" size={24} />
                  <RadioCards.Label>홍보/마케팅</RadioCards.Label>
                </RadioCards.HeaderWrapper>
              </RadioCards.Item>
            </RadioCards>
          </div>

          {/* 생성 방식 */}
          <div className={styles.sectionStyle}>
            <Label>생성 방식</Label>
            <RadioCards defaultValue="1" columns={3}>
              <RadioCards.Item value="1">
                <RadioCards.HeaderWrapper>
                  <RadioCards.Icon name="pencil" size={24} />
                  <div className={styles.labelDiscriptionWrapperStyle}>
                    <RadioCards.Label>입력된 주제로만 생성</RadioCards.Label>
                    <RadioCards.Description>
                      주제에 맞는 글을 간단히 생성
                    </RadioCards.Description>
                  </div>
                </RadioCards.HeaderWrapper>
              </RadioCards.Item>

              <RadioCards.Item value="2">
                <RadioCards.HeaderWrapper>
                  <RadioCards.Icon name="stack" size={24} />
                  <div className={styles.labelDiscriptionWrapperStyle}>
                    <RadioCards.Label>최근 뉴스로 글 생성</RadioCards.Label>
                    <RadioCards.Description>
                      최근 소식/뉴스 기반
                    </RadioCards.Description>
                  </div>
                </RadioCards.HeaderWrapper>
              </RadioCards.Item>

              <RadioCards.Item value="3">
                <RadioCards.HeaderWrapper>
                  <RadioCards.Icon name="picture" size={24} />
                  <div className={styles.labelDiscriptionWrapperStyle}>
                    <RadioCards.Label>이미지를 참고해 글 생성</RadioCards.Label>
                    <RadioCards.Description>
                      첨부한 이미지 기반
                    </RadioCards.Description>
                  </div>
                </RadioCards.HeaderWrapper>
              </RadioCards.Item>
            </RadioCards>
          </div>

          {/* 본문 길이 */}
          <div className={styles.sectionStyle}>
            <Label>본문 길이</Label>
            <RadioCards defaultValue="1" columns={3}>
              <RadioCards.Item value="1">
                <RadioCards.Badge>누구나 이용 가능</RadioCards.Badge>
                <RadioCards.Label>짧은 게시물</RadioCards.Label>
                <RadioCards.Description>
                  약 1~2문장, 최대 140자
                </RadioCards.Description>
              </RadioCards.Item>
              <RadioCards.Item value="2">
                <RadioCards.Badge>X Premium 계정 전용</RadioCards.Badge>
                <RadioCards.Label>보통 게시물</RadioCards.Label>
                <RadioCards.Description>
                  약 3~4문장, 최대 300자
                </RadioCards.Description>
              </RadioCards.Item>
              <RadioCards.Item value="3">
                <RadioCards.Badge>X Premium 계정 전용</RadioCards.Badge>
                <RadioCards.Label>긴 게시물</RadioCards.Label>
                <RadioCards.Description>
                  약 7~8문장, 최대 1000자
                </RadioCards.Description>
              </RadioCards.Item>
            </RadioCards>
          </div>

          {/* 핵심 내용 */}
          <div className={styles.sectionStyle}>
            <TextField id="basic-field">
              <TextField.Label variant="optional">핵심 내용</TextField.Label>
              <TextField.Input
                placeholder="주제를 적어주세요"
                maxLength={5000}
              />
            </TextField>
          </div>
        </div>
      </div>
    </div>
  );
}
