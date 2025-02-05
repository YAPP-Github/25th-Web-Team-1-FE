'use client';

import { IconButton } from '@repo/ui/IconButton';
import { controlBar, postWrapper, titleWrapper, wrapper } from './EditPost.css';
import { Text } from '@repo/ui/Text';
import { Badge } from '@repo/ui/Badge';
import { PostEditor } from '../PostEditor/PostEditor';
import { EditPromptField } from '../EditPromptField/EditPromptField';
import { FormProvider, useForm } from 'react-hook-form';

export function EditPost() {
  const methods = useForm();
  return (
    <div className={wrapper}>
      <div className={controlBar}>
        <div>
          <IconButton icon="arrowLineTop" />
          <IconButton icon="arrowLineBottom" />
        </div>

        <div>
          <IconButton icon="dots" />
          <IconButton icon="x" iconType="stroke" />
        </div>
      </div>

      <div className={postWrapper}>
        <div className={titleWrapper}>
          <Text color="grey1000" fontSize={28} fontWeight="bold">
            네이버 웨일, 본사로 이전하는 이유
          </Text>
          <Badge size="large" variant="neutral" shape="square">
            요약
          </Badge>
        </div>
        <FormProvider {...methods}>
          <PostEditor />
          <EditPromptField />
        </FormProvider>
      </div>
    </div>
  );
}
