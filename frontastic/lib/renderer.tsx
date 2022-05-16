import * as React from 'react';
import { Cell as LayoutElement } from './cell';
import { TasticWrapper } from './component';
import { Errors } from './errors';
import { Grid } from './grid';
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
    <div className="flex min-h-screen flex-col items-stretch justify-start">
      {process && process.env.NODE_ENV !== 'production' && <Errors />}
      <Grid gridClassName={gridClassName} wrapperClassName={`${wrapperClassName} w-full`}>
        {data?.page?.sections?.head?.layoutElements.map((layoutElement: LayoutElementType, i: number) => (
          <LayoutElement size={layoutElement.configuration.size} key={i}>
            {layoutElement.tastics.map((t) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
                pageFolder={data.pageFolder}
              />
            ))}
          </LayoutElement>
        ))}
      </Grid>
      <Grid gridClassName={gridClassName} wrapperClassName={`${wrapperClassName} w-full grow`}>
        {data?.page?.sections?.main?.layoutElements.map((layoutElement: LayoutElementType, i: number) => (
          <LayoutElement size={layoutElement.configuration.size} key={i}>
            {layoutElement.tastics.map((t: Tastic) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
                pageFolder={data.pageFolder}
              />
            ))}
          </LayoutElement>
        ))}
      </Grid>
      <Grid gridClassName={gridClassName} wrapperClassName={`${wrapperClassName} w-full`}>
        {data?.page?.sections?.footer?.layoutElements.map((layoutElement: LayoutElementType, i: number) => (
          <LayoutElement size={layoutElement.configuration.size} key={i}>
            {layoutElement.tastics.map((t: Tastic) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
                pageFolder={data.pageFolder}
              />
            ))}
          </LayoutElement>
        ))}
      </Grid>
    </div>
  );
}
