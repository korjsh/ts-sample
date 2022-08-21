import express from "express";
import User, { UserDeleteParams, UserInsertParams, UserUpdateParams } from '../../src/models/users'
const dao = {
  select() {
    return new Promise((resolve, reject) => {
      User.findAll().then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  insert(params: UserInsertParams) {
    return new Promise((resolve, reject) => {
      User.create({ ...params }).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  update(params: UserUpdateParams) {
    return new Promise((resolve, reject) => {
      User.update(params, { where: { id: params.id } }).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  delete(params: UserDeleteParams) {
    return new Promise((resolve, reject) => {
      User.destroy({ where: { id: +params.id } }).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

const router = express.Router();
// localhost/users/
router.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const result = await dao.select()
    res.send(result)
  } catch (err) {
    res.send(err)
  }
});

router.post('/', async (req: express.Request, res: express.Response) => {
  const params = req.body
  console.log(params)
  try {
    const result = await dao.insert(params)
    res.send(result)
  } catch (err) {
    res.send(err)
  }
})

router.put('/:id', async (req: express.Request, res: express.Response) => {
  const params = {
    id: req.params['id'],
    ...req.body
  }
  try {
    const result = await dao.update(params)
    res.send(result)
  } catch (err) {
    res.send(err)
  }
})

router.delete('/:id',async (req: express.Request, res: express.Response) => {
  const params = {
    id: +req.params['id']
  }
  try {
    const result = await dao.delete(params)
    res.send('deleted!')
  } catch (err) {
    res.send(err)
  }
})



export { router };
