import { EntityLevelJsonSchema, JsonSchemaCommon, PropertyLevelJsonSchema } from 'src/interfaces/jsonSchema';
import { GeometryObject } from 'geojson';

interface EntityBaseProps {
    id: string;
    type: string;
    '@context'?: string[];
    createdAt?: string;
    modifiedAt?: string;
}

interface StellioRelationship {
    [key: string]: StellioProp | string | undefined | StellioRelationship | StellioJsonProp;
    type: 'Relationship';
    object: string;
    datasetId?: string;
}

type StellioProp<T = any> = {
    [key: string]: StellioProp | string | T | undefined | StellioRelationship | StellioJsonProp;
    type: 'Property';
    value: T;
    unitCode?: string;
    observedAt?: string;
    modifiedAt?: string;
    createdAt?: string;
    observedBy?: StellioRelationship;
};

type StellioGeoProp = {
    [key: string]: StellioProp | GeometryObject | string | undefined | StellioRelationship | StellioJsonProp;
    type: 'GeoProperty';
    value: GeometryObject;
    unitCode?: string;
    observedAt?: string;
    modifiedAt?: string;
    createdAt?: string;
    observedBy?: StellioRelationship;
};

type StellioMultiAttribute<T = any> = {
    [key: string]: StellioProp | string | T | undefined | StellioRelationship | StellioJsonProp;
    type: 'Property';
    value: T;
    datasetId: string;
};

type StellioJsonProp<T = unknown> = {
    type: 'JsonProperty';
    json: T extends object ? T : unknown;
    observedAt?: string;
    modifiedAt?: string;
    createdAt?: string;
    observedBy?: StellioRelationship;
};

type NgsildPossibleValue =
    | StellioProp<any>
    | StellioGeoProp
    | StellioJsonProp
    | StellioRelationship
    | StellioRelationship[]
    | StellioMultiAttribute<any>[]
    | string[]
    | string
    | number
    | undefined;

export type StellioTemplateProp = StellioProp & {
    jsonSchema: StellioProp<PropertyLevelJsonSchema>;
};

export type StellioTemplateRelationship = StellioRelationship & {
    jsonSchema: StellioProp<PropertyLevelJsonSchema>;
};

export type StellioTemplateJsonProp = StellioJsonProp & {
    jsonSchema: StellioProp<PropertyLevelJsonSchema>;
};

export type StellioTemplateGeoProp = StellioGeoProp & {
    jsonSchema: StellioProp<PropertyLevelJsonSchema>;
};

export interface StellioTemplate extends EntityBaseProps {
    [key: string]:
        | NgsildPossibleValue
        | StellioTemplateProp
        | StellioTemplateRelationship
        | StellioTemplateJsonProp
        | StellioTemplateGeoProp;
    jsonSchema: StellioProp<EntityLevelJsonSchema>;
}

export type { EntityLevelJsonSchema, JsonSchemaCommon, PropertyLevelJsonSchema };
