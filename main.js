import * as mapboxStyle from 'ol-mapbox-style';
export { mapboxStyle };

export {Overlay, Collection, Map, View, Feature } from 'ol';

import { unByKey } from 'ol/Observable';
import { Observable } from 'ol';
Observable.unByKey = unByKey;

export { Observable };

import * as tilegrid from 'ol/tilegrid';
export { tilegrid };

import { Control, Zoom, Attribution, ScaleLine } from 'ol/control';
import LayerSwitcher from 'ol-layerswitcher';
let control = { Control, Zoom, Attribution, ScaleLine, LayerSwitcher };
export { control };

import * as interaction from 'ol/interaction';
export { interaction };

import * as sphere from 'ol/sphere';
export { sphere };

import { GeoJSON, KML, MVT } from 'ol/format';
let format = {
	GeoJSON: GeoJSON,
	KML: KML,
	MVT: MVT,
};
export { format };

import { Tile, Group, Vector as VectorLayer, VectorTile, WebGLPoints, Heatmap, Image } from 'ol/layer';
let layer = {
	Group: Group,
	Tile: Tile,
	Vector: VectorLayer,
	VectorTile: VectorTile,
	WebGLPoints: WebGLPoints,
	Heatmap: Heatmap,
	Image: Image,
};
export { layer };

import * as proj from 'ol/proj';
export { proj };

import { LineString, Point, MultiPoint } from 'ol/geom';
let geom = {
	LineString: LineString,
	Point: Point,
	MultiPoint: MultiPoint,
};
export { geom };

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

import { OSM, XYZ, TileWMS, BingMaps, Vector as VectorSource, VectorTile as VTS, ImageWMS, ImageStatic } from 'ol/source';
let source = {
	OSM: OSM,
	XYZ: XYZ,
	TileWMS: TileWMS,
	BingMaps: BingMaps,
	Vector: VectorSource,
	VectorTile: VTS,
	ImageWMS: ImageWMS,
	ImageStatic: ImageStatic,
};
export {source};

