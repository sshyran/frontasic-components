import * as React from 'react';
import { TasticWrapper } from './component';
import { Grid } from './grid';
import { Cell as LayoutElement } from './cell';
import { Cell as LayoutElementType, Tastic, TasticRegistry, PageDataResponse } from './types';

export function FrontasticRenderer({
  data,
  tastics = {},
  gridClassName,
  wrapperClassName,
}: {
  data: PageDataResponse;
  tastics: TasticRegistry;
  gridClassName?: string;
  wrapperClassName?: string;
}) {
  return (
    <div>
      <Grid gridClassName={gridClassName} wrapperClassName={wrapperClassName}>
        {data?.page?.sections?.head?.layoutElements.map((layoutElement: LayoutElementType, i: number) => (
          <LayoutElement size={layoutElement.configuration.size} key={i}>
            {layoutElement.tastics.map((t) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
              ></TasticWrapper>
            ))}
          </LayoutElement>
        ))}
      </Grid>
      <Grid gridClassName={gridClassName} wrapperClassName={wrapperClassName}>
        {data?.page?.sections?.main.layoutElements.map((layoutElement: LayoutElementType, i: number) => (
          <LayoutElement size={layoutElement.configuration.size} key={i}>
            {layoutElement.tastics.map((t: Tastic) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
              ></TasticWrapper>
            ))}
          </LayoutElement>
        ))}
      </Grid>
      <Grid gridClassName={gridClassName} wrapperClassName={wrapperClassName}>
        {data?.page?.sections?.footer.layoutElements.map((layoutElement: LayoutElementType, i: number) => (
          <LayoutElement size={layoutElement.configuration.size} key={i}>
            {layoutElement.tastics.map((t: Tastic) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
              ></TasticWrapper>
            ))}
          </LayoutElement>
        ))}
      </Grid>
    </div>
  );
}
