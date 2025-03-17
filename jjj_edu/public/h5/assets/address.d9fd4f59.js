const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0N2FlZWQ0YS04YTlhLTc1NDQtYjA5MC1hMDY3Y2VhOGJjOGIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEJCQUM1MDE0RUUyMTFFRTk4RUM4QkZGRTJGOEE0RDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEJCQUM1MDA0RUUyMTFFRTk4RUM4QkZGRTJGOEE0RDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTYyOTFhZDgtNTZiMC1iMTRjLTkxMzQtMjU3NjZkOWNmZTczIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MjRmZjhiZTItNGFiMS1kYTQxLThlMTUt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";export{A as _};
