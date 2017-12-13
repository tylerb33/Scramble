# Endpoints

### Verbs & Endpoints                    

### Golf Course Resources
* ```GET```    /api/v1/golf_courses            
* ```GET```    /api/v1/golf_courses/:id        



### Competition Resources
Example ```POST``` request:
```
 {"competition": 
    	{
    	"title": "Nashville Classic",
    	"description": "Et sequi nihil qui reprehenderit perferendis quo.",
    	"competition_type_id": 2,
    	"golf_course_id": 3,
    	"user_id": 3,
    	"date": "2018-03-27T00:00:00.000Z",
    	"time": "2000-01-01T16:27:34.000Z",
    	"contact_email": "hunter.will@hotmail.com",
    	"entry_fee": 55
		}
    }
```
* ```GET```    /api/v1/competitions
* ```POST```    /api/v1/competitions 
* ```GET```    /api/v1/competitions/:id
* ```PATCH```    /api/v1/competitions/:id
* ```PUT```    /api/v1/competitions/:id 
* ```DELETE```    /api/v1/competitions/:id 
