export {Collection, Map, View, Feature } from 'ol';


import { unByKey } from 'ol/Observable';
import { Observable } from 'ol';
Observable.unByKey = unByKey;

export { Observable };

import { Control, Zoom, Attribution, ScaleLine } from 'ol/control';
let control = { Control, Zoom, Attribution, ScaleLine };
export { control };

import * as interaction from 'ol/interaction';
export { interaction };

import * as sphere from 'ol/sphere';
export { sphere };

import { GeoJSON } from 'ol/format';
let format = {
	GeoJSON: GeoJSON,
};
export { format };

import { Tile, Group, Vector as VectorLayer, WebGLPoints, Heatmap } from 'ol/layer';
let layer = {
	Group: Group,
	Tile: Tile,
	Vector: VectorLayer,
	WebGLPoints: WebGLPoints,
	Heatmap: Heatmap,
};
export { layer };

import { toLonLat, fromLonLat } from 'ol/proj';
let proj = {
	toLonLat: toLonLat,
	fromLonLat: fromLonLat,
};
export { proj };

import { LineString, Point, MultiPoint } from 'ol/geom';
let geom = {
	LineString: LineString,
	Point: Point,
	MultiPoint: MultiPoint,
};
export { geom };

//import $Style from 'ol/style/Style';
//
import { Style, Text, Stroke, Fill, Circle, Icon } from 'ol/style';
let style = {
	Icon: Icon,
	Style: Style,
	Text: Text,
	Stroke: Stroke,
	Fill: Fill,
	Circle: Circle,
};
export { style };

import { OSM, XYZ, TileWMS, BingMaps, Vector as VectorSource} from 'ol/source';
let source = {
	OSM: OSM,
	XYZ: XYZ,
	TileWMS: TileWMS,
	BingMaps: BingMaps,
	Vector: VectorSource,
};
export {source};

